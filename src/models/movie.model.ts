export class MovieModel {
  public categories!: string[]
  public coverUrl!: string;
  public date!: Date;
  public description!: string;
  public duration!: number;
  public id!: string;
  public storageUrl?: string;
  public title!: string;

  constructor() {
    this.categories = [];
    this.coverUrl = '';
    this.date = new Date();
    this.description = '';
    this.duration = 0;
    this.id = '';
    this.storageUrl = '';
    this.title = '';
  }
}