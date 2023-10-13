import { Injectable } from '@nestjs/common';
// import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Page } from './interface/page.interface';

@Injectable()
export class PagesService {
  constructor(@InjectModel('Page') private readonly pageModel: Model<Page>) {}

  async create(page: Page): Promise<Page> {
    const newPage = new this.pageModel(page);
    return await newPage.save();
  }

  async findAll(id: string): Promise<Page[]> {
    return await this.pageModel.find({ hotelid: id }).sort({ order: 1 });
  }
  async deletePage(id): Promise<Page> {
    return await this.pageModel.findByIdAndDelete(id);
  }
  // !  @Put('editorid/:id')controller sayfasındaki isteğin içinde findOne var. oraya cevap veriyor. buna dokunma
  async findOne(id: any): Promise<Page> {
    return await this.pageModel.findById(id);
  }
  async update(id: string, updatePageDto: UpdatePageDto) {
    return await this.pageModel.findByIdAndUpdate(id, updatePageDto);
  }

  async findPageEditor(id: string): Promise<Page> {
    return await this.pageModel.findOne({ _id: id });
  }
  async updateEditor(id: string, updatePageDto: UpdatePageDto) {
    // console.log(updatePageDto);
    return await this.pageModel.findByIdAndUpdate(
      id,
      {
        $push: {
          content: updatePageDto,
        },
      },
      { new: true },
    );
  }

  async updateContent(id: string, updatePageDto: UpdatePageDto) {
    // console.log(updatePageDto);
    return await this.pageModel.findOneAndUpdate(
      { _id: id, 'content.editorid': updatePageDto.editorid },
      {
        $set: {
          'content.$.content': updatePageDto.content,
          'content.$.showpicturenumber': updatePageDto.showpicturenumber,
          'content.$.sectionGroup': updatePageDto.sectionGroup,
        },
        //content: updatePageDto,
      },
      { new: true },
    );
  }

  async remove(id: string, editno: number) {
    // console.log(id + '-' + editno);
    return await this.pageModel.updateOne(
      {
        _id: id,
      },
      { $pull: { content: { editorid: editno } } },
      { new: true },
    );
  }
  //status update
  async updateStatus(id: any, status: any) {
    return await this.pageModel.findByIdAndUpdate(id, {
      status,
    });
  }
  //statusMenuFooter update
  async updateStatusMenuFooter(id: any, statusMenuFooter: any) {
    return await this.pageModel.findByIdAndUpdate(id, {
      statusMenuFooter,
    });
  }
  //subpage update
  async updateSubPage(id: any, subpage: any) {
    // console.log(subpage);
    return await this.pageModel.findByIdAndUpdate(id, {
      subpage,
    });
  }
  async sortablePage(element: any, index: any) {
    // console.log(allSortable);
    // return await order.forEach((element: object, index: string) => {
    //   console.log(element);
    //   console.log(index);
    //   this.pageModel.findOneAndUpdate(
    //     { _id: '636e5890dc5793d36530da77' },
    //     {
    //       order: 5,
    //     },
    //   );
    // });
    return await this.pageModel.findByIdAndUpdate(
      { _id: element },
      {
        order: index,
      },
    );
  }
  async sortableEditor(id: any, element: any, index: any) {
    return await this.pageModel.findOneAndUpdate(
      { _id: id, 'content.editorid': element },
      {
        $set: {
          'content.$.order': index,
        },
        //content: updatePageDto,
      },
      { new: true },
    );
  }

  async themepagesave(id: string, linkedpage: string) {
    return await this.pageModel.findByIdAndUpdate(
      id,
      {
        linkedpage,
      },
      { new: true },
    );
  }
}
