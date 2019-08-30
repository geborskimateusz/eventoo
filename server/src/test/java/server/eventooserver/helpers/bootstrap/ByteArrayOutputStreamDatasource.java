package server.eventooserver.helpers.bootstrap;

import java.io.ByteArrayOutputStream;

public class ByteArrayOutputStreamDatasource {

    public static ByteArrayOutputStream getByteArrayOutputStream() {

        ByteArrayOutputStream bout = new ByteArrayOutputStream();

        for (int i=0;i<10;i++) {
            bout.write((byte) (Math.random() * 100));
        }

        return bout;
    }
}
