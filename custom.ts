// Add your code here
 //%
    class Message{
        text?:string;
        ordinal?:number;

      constructor(text: string) {
    this.text = text;
  }


        //% blockId="message_get_text" block="%this|text"
        public getText():string{
            return this.text;
        }
        //% blockId="message_get_ordinal" block="%this|number"
        public getOrdinal():number{
            return this.ordinal;
        }
    }

//% color="#AA278D" weight=100
namespace messaging {
  
//% blockId="create_message" block="create message|with %text"
export function createMessage(text: string) : Message {
    return new Message(text);
}
}