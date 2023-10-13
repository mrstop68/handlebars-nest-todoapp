import { PartialType } from '@nestjs/mapped-types';
import { CreatePageDto } from './create-page.dto';

export class UpdatePageDto extends PartialType(CreatePageDto) {
  hotelid: string;
  pagename: string;
  link: string;
  img: string;
  // content: [];
  content: [
    {
      content: string;
      editorid: number;
      showpicturenumber: number;
      order: number;
      sectionGroup: string;
    },
  ];
  editorid: number;
  showpicturenumber: number;
  sectionGroup: string;
  status: string;
  statusMenuFooter: string;
  order: number;
  linkedpage: string;
  lang: string;
}
