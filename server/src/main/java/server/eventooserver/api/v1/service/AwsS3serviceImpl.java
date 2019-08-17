package server.eventooserver.api.v1.service;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.util.IOUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;

@Slf4j
@Service
public class AwsS3serviceImpl implements AwsS3service {


    @Value("${amazon.properties.endpointUrl}")
    private String endpointUrl;
    @Value("${amazon.properties.bucketName}")
    private String bucketName;

    private final AmazonS3 s3client;

    public AwsS3serviceImpl(AmazonS3 s3client) {
        this.s3client = s3client;
    }

    @Override
    public void uploadFile(InputStream inputStream, String pdfName) {

        ObjectMetadata metadata = new ObjectMetadata();

        try {
            metadata.setContentLength(inputStream.available());
        } catch (IOException e) {
            System.err.printf("Failed while reading bytes from %s", e.getMessage());
        } finally {
            s3client.putObject(
                    bucketName,
                    "invoices/" + pdfName,
                    inputStream,
                    metadata
            );
        }
    }

    @Override
    public ByteArrayOutputStream downloadFileFormBucket(String fileName) {
        try {
            S3Object s3object = s3client.getObject(new GetObjectRequest(bucketName, fileName));

            InputStream is = s3object.getObjectContent();
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            int len;
            byte[] buffer = new byte[4096];
            while ((len = is.read(buffer, 0, buffer.length)) != -1) {
                baos.write(buffer, 0, len);
            }

            return baos;
        } catch (IOException ioe) {
            log.error("IOException: " + ioe.getMessage());
        } catch (AmazonServiceException ase) {
            log.info("sCaught an AmazonServiceException from GET requests, rejected reasons:");
            log.info("Error Message:    " + ase.getMessage());
            log.info("HTTP Status Code: " + ase.getStatusCode());
            log.info("AWS Error Code:   " + ase.getErrorCode());
            log.info("Error Type:       " + ase.getErrorType());
            log.info("Request ID:       " + ase.getRequestId());
            throw ase;
        } catch (AmazonClientException ace) {
            log.info("Caught an AmazonClientException: ");
            log.info("Error Message: " + ace.getMessage());
            throw ace;
        }

        return null;
    }
}
