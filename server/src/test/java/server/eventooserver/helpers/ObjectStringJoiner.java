package server.eventooserver.helpers;

import java.lang.reflect.Field;

public class ObjectStringJoiner {

    public static String join(Object o) {
        StringBuilder builder = new StringBuilder();

        for (Field field : o.getClass().getDeclaredFields()) {
            try {
                field.setAccessible(true);

                Object instance = field.get(o);


                builder.append(instance);

            } catch (IllegalAccessException e) {
                System.out.println(e.getMessage());
            }
        }

        System.out.println(builder);
        return builder.toString();

    }

    //TicketDTO -> Ticket
    public static String dtoToPlainDomain(String s) {
        return s.replace("DTO", "");
    }
}
