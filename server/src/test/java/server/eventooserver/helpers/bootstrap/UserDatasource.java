package server.eventooserver.helpers.bootstrap;

import server.eventooserver.domain.User;

public class UserDatasource {

    public static User getUser() {
        return User.builder()
                .username("fake username")
                .password("fake password")
                .build();
    }
}
