import { Component, OnInit } from '@angular/core';
import { Pantheon } from '../pantheon';
import { PantheonService } from '../pantheon.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass'],
})
export class HomepageComponent implements OnInit {
  title: string = 'Ancient Champions';
  pantheon?: Pantheon;

  preview: string =
    'https://awevideo.s3.amazonaws.com/video-9039549-74208a8d449874e0b8ae6b4f0c69cbd2.webm?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20220523%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220523T120016Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=3e1c273a510696cb10c3debaf9851809488c3f96b958610fdc2ce737df808d51';

  constructor(private pantheonService: PantheonService) {}

  ngOnInit(): void {
    this.getPantheon();
  }

  getPantheon(): void {
    const id: number = Math.floor(Math.random() * 4 + 1);
    this.pantheonService.getPantheon(id).subscribe((pantheon) => {
      this.pantheon = pantheon;
    });
  }
}
