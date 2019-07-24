import { Event } from 'src/app/shared/event.model';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';

export interface EventsState extends EntityState<Event> {
  
}

export const adapter: EntityAdapter<Event> = createEntityAdapter<Event>();