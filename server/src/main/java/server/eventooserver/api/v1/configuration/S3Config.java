package server.eventooserver.api.v1.configuration;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class S3Config {

    @Value("${amazon.properties.accessKey}")
    private String accessKey;
    @Value("${amazon.properties.secretKey}")
    private String secretKey;

    @Bean
    public AmazonS3 setCredentials() {
        AWSCredentials credentials = new BasicAWSCredentials(this.accessKey, this.secretKey);
        return new AmazonS3Client(credentials);
    }


}
