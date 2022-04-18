import { AudioResource, createAudioResource } from "@discordjs/voice";

export class Song {
  constructor(public fileLocation: string, public genre: string) {}

  public get audioResource(): AudioResource {
    return createAudioResource(this.fileLocation);
  }

  public get title(): string {
    return this.fileLocation.split("/")[3].replace(/\.[^/.]+$/, "");
  }
}
