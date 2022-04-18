import {
  ButtonInteraction,
  CommandInteraction,
  ContextMenuInteraction,
  Message,
  MessageEmbed,
} from "discord.js";

export enum StatusEmoji {
  SUCCESS = "<a:success:952340083418230874>",
  FAIL = "<a:fail:952340157858709594>",
}
export class EvieEmbed extends MessageEmbed {
  public constructor() {
    super();
    this.setColor(`#36393f`).setTimestamp().setFooter({
      text: "Evie",
      iconURL: "https://eviebot.rocks/assets/EvieIcon.png",
    });
  }
}

export async function StatusEmbed(status: StatusEmoji, description: string) {
  return new MessageEmbed()
    .setColor(status === StatusEmoji.SUCCESS ? "#00ff00" : "#ff0000")
    .setTimestamp()
    .setFooter({
      text: "Evie",
      iconURL: "https://eviebot.rocks/assets/EvieIcon.png",
    })
    .setDescription(`${status} ${description}`);
}

export async function ReplyStatusEmbed(
  status: StatusEmoji,
  description: string,
  i: CommandInteraction | ContextMenuInteraction | ButtonInteraction,
  ephemeral: boolean = false
): Promise<Message | Message<boolean> | void> {
  const embed = new MessageEmbed()
    .setColor(status === StatusEmoji.SUCCESS ? "#00ff00" : "#ff0000")
    .setTimestamp()
    .setFooter({
      text: "Evie",
      iconURL: "https://eviebot.rocks/assets/EvieIcon.png",
    })
    .setDescription(`${status} ${description}`);

  return i.reply({
    embeds: [embed],
    ephemeral,
  });
}
