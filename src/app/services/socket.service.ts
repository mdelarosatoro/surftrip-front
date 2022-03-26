import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SocketService {
    constructor(public socket: Socket) {}

    sendBooking(booking: any) {
        this.socket.emit('newBooking', booking);
    }

    getBookingNotification(): Observable<any> {
        return this.socket.fromEvent('newBookingNotification');
    }
}
