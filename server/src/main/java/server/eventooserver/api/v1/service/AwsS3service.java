package server.eventooserver.api.v1.service;

import com.amazonaws.services.s3.model.S3Object;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.InputStream;

public interface AwsS3service {

    void uploadFile(InputStream inputStream, String pdfName);

    ByteArrayOutputStream downloadFile(String fileName);
}
