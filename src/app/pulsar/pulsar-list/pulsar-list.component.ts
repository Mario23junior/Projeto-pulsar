import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pulsar } from 'src/app/model/Pulsar';
import { PulsarService } from 'src/app/service/pulsar.service';

@Component({
  selector: 'app-pulsar-list',
  templateUrl: './pulsar-list.component.html',
  styleUrls: ['./pulsar-list.component.css']
})
export class PulsarListComponent implements OnInit {

  data: Pulsar[] = []
  dataBase: Observable<Pulsar[]> 

  constructor(
    private service: PulsarService,
   ) {
    this.service.listAll()
      .subscribe(data => {
        this.data = data
        console.log(data)
      })

    this.dataBase = this.service.listAll()
    
      
  }

  ngOnInit(): void {
  }

}
