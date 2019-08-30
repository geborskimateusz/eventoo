package server.eventooserver.helpers;

import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.stream.Collectors;

public class ObjectStringJoiner {

    private static final String DELIMITER = ",";
    private static final String DTOsuffix = "DTO";
    private static final String EMPTY = "";

    public static String join(Object o) {
        return  Arrays.stream(o.getClass().getDeclaredFields())
                .map(field -> toString(o, field))
                .collect(Collectors.joining(DELIMITER));

    }

    //TicketDTO -> Ticket
    public static String dtoToPlainDomain(String s) {
        return s.replace(DTOsuffix, EMPTY);
    }


    private static String toString(Object o, Field field) {

        try {

            field.setAccessible(true);

            Object instance = field.get(o);

            if (instance != null){
                return instance.toString();
            }

        } catch (IllegalAccessException e) {
            System.out.println(e.getMessage());
        }

        return null;
    }

}
