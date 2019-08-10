package server.eventooserver.api.v1.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import server.eventooserver.domain.Event;
import server.eventooserver.domain.MusicGenre;

import java.util.List;

@Repository
public interface EventRepository extends PagingAndSortingRepository<Event, Long> {

    Page<Event> findAll(Pageable pageable);
    Page<Event> findByGenre(MusicGenre genre, Pageable pageable);
}
