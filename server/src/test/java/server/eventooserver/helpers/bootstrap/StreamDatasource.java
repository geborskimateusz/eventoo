package server.eventooserver.helpers.bootstrap;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;

public class StreamDatasource {

    public static ByteArrayOutputStream getByteArrayOutputStream() {

        ByteArrayOutputStream bout = new ByteArrayOutputStream();

        for (int i=0;i<10;i++) {
            bout.write((byte) (Math.random() * 100));
        }

        return bout;
    }

    public static InputStream getInputStream() {
        return new ByteArrayInputStream(getByteArrayOutputStream().toByteArray());
    }
}
