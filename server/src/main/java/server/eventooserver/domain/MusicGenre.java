package server.eventooserver.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum MusicGenre {

    @JsonProperty("Dance")
    DANCE,

    @JsonProperty("Pop")
    POP,

    @JsonProperty("Electronic")
    ELECTRONIC,

    @JsonProperty("Flamenco")
    FLAMENCO,

    @JsonProperty("Jazz")
    JAZZ,

    @JsonProperty("Hip-hop")
    HIP_HOP,

    @JsonProperty("Rock")
    ROCK,

    @JsonProperty("Metal")
    METAL,

    @JsonProperty("Folk")
    FOLK,

    @JsonProperty("Reggae")
    REGGAE,

    @JsonProperty("Soul")
    SOUL
}
