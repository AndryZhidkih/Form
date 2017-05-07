import React,{Component} from "react";
import{Form,FormGroup,Button,FormControl,ControlLabel} from "react-bootstrap";
  
  class FormaBoot extends Component { 
    constructor(){
      super();
      this.state={
        Comments:[]
      }
    }
    handleSubmit(event){
      event.preventDefault();
      let id=Date.now();
      let name=this.textInput.value;
      let email=this.textEmail.value;
      let text=this.textArea.value;
      this.setState({
      Comments:this.state.Comments.concat({id,name,email,text})
    })
     this.textInput.value=""
     this.textEmail.value=""
     this.textArea.value=""
    }
   
    render(){
      let newComents=this.state.Comments
      return(
        <div className="wrapper">
        <h4 className="h4-elem">Оставте свой коментарий</h4>
    <Form inline className="form-elem" onSubmit={this.handleSubmit.bind(this)} >
        <FormGroup controlId="formInlineName">
          <ControlLabel className="label-text">Имя</ControlLabel>
          {' '}
          <FormControl className="input" type="text" placeholder="James Bond "required  inputRef={(input)=>{this.textInput = input;}}  />
        </FormGroup>
        {' '}
        <FormGroup controlId="formInlineEmail">
          <ControlLabel className="label-text">Email</ControlLabel>
          {' '}
          <FormControl className="input" type="email" placeholder="james.do_it@lal.com" inputRef={(input)=>{this.textEmail = input;}} />
        </FormGroup>
        {' '}
       <FormGroup controlId="formControlsTextarea">
         <ControlLabel className="label-text">Напиши свои мысли</ControlLabel>
          <FormControl className="text_area" componentClass="textarea" placeholder="Что ты думаешь по этому поводу?)" inputRef={(input)=>{this.textArea = input;}}/>
      </FormGroup>

        <Button bsStyle="primary" type="submit" className="button-elem">Оставте отзыв </Button>
      </Form>
       <div className="contact-form">
        <ul className="ul-form">
          {
            newComents.map(function(el){
              return <CommentsGrid
               key={el.id}
               name={el.name}
               email={el.email}
               text={el.text}
               />
            })
          }
        </ul >
       </div>
      </div>
      
      )
    }
}
class CommentsGrid extends Component{
  render(){
    return(
        <li className="li-grid">
        <div className="name-grid">{this.props.name}</div>
        <div className="email-grid">{this.props.email}</div>      
        <div className="text-grid">{this.props.text} </div>
        </li>
        
      )
  }
}

export default  FormaBoot
