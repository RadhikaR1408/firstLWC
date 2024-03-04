import { LightningElement } from 'lwc';

export default class FirstLWC extends LightningElement {
    handleclick(event)    {
        console.log('This is salesforce '+event.target.lable);
    }

constructor(){
    super();
    console.log('inside constructor')
}
connectedCallback() {
    console.log('inside connected call back')
}
renderedCallback() {
    console.log('inside rendered call back')
}
}
