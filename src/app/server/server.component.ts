import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color: white;
        }
    `]
})
export class ServerComponent {
    serverId: number = Math.floor(Math.random() * 10);
    serverStatus: string = 'offline'


    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

    }

    // or write a method and call it in the html file
    getServerStatus() {
        return this.serverStatus
    }
    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red'
    } 
}