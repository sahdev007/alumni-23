
import {
  Component,
  OnInit
} from '@angular/core';

import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public dragIconId: number;
  public dropTileId: number;
  public teamArray = [];
  imgUrl:String;
 
  constructor(private dataService: DataService,
    public notification: TokenInterceptor) { 
      this.imgUrl = environment.imgUrl;
    }

  ngOnInit(): void {
    this.teamData();
  }

  async teamData() {
    let action: string = 'all-team';
    await this.dataService.getData(action).subscribe((user: any) => {
      if (user.status == 200) {
        this.teamArray = user?.data;
        console.log(this.teamArray)
        this.teamArray.sort((a: any, b: any) => {
          return a?.order - b?.order;
        });
      }
    },(error) => {
      this.notification.notificationService.openFailureSnackBar(error);
    });
  }
  public onIconDropped(ev) {
    ev.drag.dropFinished();
}

public onEnterHandler(ev): void {
    this.dropTileId = parseInt(ev.owner.element.nativeElement.id, 10);
    // the event gets raised immediately, but we want to swap only when we drag over another icon
    if (this.dragIconId === this.dropTileId) {
        return;
    }
    const dragIndex = this.teamArray.findIndex((iconObj) => iconObj.id === this.dragIconId);
    const dropIndex = this.teamArray.findIndex((iconObj) => iconObj.id === this.dropTileId);
    this.swapIcons(dragIndex, dropIndex);
}

public dragStartHandler(id: number): void {
    this.dragIconId = id;
}

public dragEndHandler(dragRef: HTMLElement) {
    dragRef.style.visibility = 'visible';
}

public ghostCreateHandler(dragRef: HTMLElement) {
    dragRef.style.visibility = 'hidden';
}

private swapIcons(dragIndex: number, dropIndex: number) {
    const tempObj = this.teamArray[dragIndex];
    this.teamArray.splice(dragIndex, 1);
    this.teamArray.splice(dropIndex, 0, tempObj);
}
}
