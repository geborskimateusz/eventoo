package server.eventooserver.api.v1.service;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.util.IOUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;

@Service
public class AwsS3serviceImpl implements AwsS3service {

    @Value("${amazon.properties.endpointUrl}")
    private String endpointUrl;
    @Value("${amazon.properties.bucketName}")
    private String bucketName;
    @Value("${amazon.properties.accessKey}")
    private String accessKey;
    @Value("${amazon.properties.secretKey}")
    private String secretKey;

    private AmazonS3 s3client;

    @PostConstruct
    public void setCredentials() {
        AWSCredentials credentials = new BasicAWSCredentials(this.accessKey, this.secretKey);
        this.s3client = new AmazonS3Client(credentials);
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
}
