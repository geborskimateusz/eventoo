package server.eventooserver.helpers;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class Comparator {

    public static void areEquals(Object dto, Object domain) {
        String dtoAsString = ObjectStringJoiner.join(dto);
        dtoAsString = ObjectStringJoiner.dtoToPlainDomain(dtoAsString);

        String domainAsString = ObjectStringJoiner.join(domain);

        assertEquals(dtoAsString, domainAsString);
    }

}
