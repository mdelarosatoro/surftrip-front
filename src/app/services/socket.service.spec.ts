import { TestBed } from '@angular/core/testing';
import { Socket } from 'ngx-socket-io';

import { SocketService } from './socket.service';

describe('SocketService', () => {
    let service: SocketService;
    let socket: Socket;
    let mockSocket = {
        emit: jasmine.createSpy('emit'),
        fromEvent: jasmine.createSpy('fromEvent'),
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: Socket, useValue: mockSocket }],
        });
        service = TestBed.inject(SocketService);
        socket = TestBed.inject(Socket);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();

        service.sendBooking({});
        expect(service.socket.emit).toHaveBeenCalled();

        service.getBookingNotification();
        expect(service.socket.fromEvent).toHaveBeenCalled();
    });
});
