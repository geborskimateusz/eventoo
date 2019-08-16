package server.eventooserver.api.v1.service;

import java.io.File;
import java.io.InputStream;

public interface AwsS3service {

    void uploadFile(InputStream inputStream, String pdfName);
}
