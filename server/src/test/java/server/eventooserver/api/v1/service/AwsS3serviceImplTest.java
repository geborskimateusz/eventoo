package server.eventooserver.api.v1.service;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import server.eventooserver.helpers.bootstrap.ByteArrayOutputStreamDatasource;

import java.io.ByteArrayOutputStream;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

class AwsS3serviceImplTest {

    public static final String FAKE_KEY = "Fake key";
    public static final String FAKE_OBJECT_ID = "Fake object id";
    
    @Mock
    AmazonS3Client amazonS3Client;

    AwsS3serviceImpl awsS3service;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        awsS3service = new AwsS3serviceImpl(amazonS3Client);
    }

    @Test
    void getFile() {

        S3Object s3Object =  new S3Object();

        when(amazonS3Client.getObject(any(GetObjectRequest.class))).thenReturn(s3Object);

        S3Object actual = amazonS3Client.getObject(new GetObjectRequest(FAKE_OBJECT_ID, FAKE_KEY));

        assertAll(() -> {
            assertEquals(s3Object.getObjectContent(),actual.getObjectContent());
            assertEquals(s3Object.getObjectMetadata(), actual.getObjectMetadata());
        });


    }
}