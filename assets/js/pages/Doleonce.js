import React, { Component } from 'react'
import $ from 'jquery';
class Doleonce extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            description: '',
            email: '',
            phone: '',
          };
        //   this.handleChange = this.handleChange.bind(this);
        //   this.handleSubmit = this.handleSubmit.bind(this);
    }

        handleSubject = (e) => {
        // console.log(e.target.value)
            this.setState({
                subject: e.target.value
            })
        }

        handleDescription = (e) => {
            // console.log(e.target.value)
            this.setState({
                description: e.target.value
            })
        }

        handleTelephone = (e) => {
            // console.log(e.target.value)
            this.setState({
                phone: e.target.value
            })
        }

        handleEmail = (e) => {
            // console.log(e.target.value)
            this.setState({
                email: e.target.value
            })
        }
        componentDidMount() {
            
        }
        
        
    handleSubmitForm = (e) => {
        e.preventDefault();    
        //  console.log(this.state.subject)
        // console.log(this.state.description)
        // console.log(this.state.email)
        // console.log(this.state.phone)
        $.ajax({
            url: 'https://127.0.0.1:8000/api/doleonce',
            type: 'POST',
            data: {               
                subject : this.state.subject,
                description : this.state.description,
                email : this.state.email,
                phone : this.state.phone
            },
            dataType: 'json',
            success: function(response) {
                console.log(response.success_message);
                this.setState({               
                    successMessage: response.success_message ? response.success_message : null,
                    
                });
            }.bind(this),
            error: function(xhr) {
                console.log(`An error occured: ${xhr.status} ${xhr.statusText} ${xhr.thrownError}`);
            }
        });
     
    }
  

  
    render() {
        return (
          <div>
           <div className="doleance-list">
              <h3>Les doléances reçues :</h3>
            </div>
            <form onSubmit={this.handleSubmitForm}>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Sujet</label>
            <input type="text" className="form-control"  value={this.state.subject}  onChange={this.handleSubject} />
              
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Description</label>
            </div>
            <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"  value={this.state.description} onChange={this.handleDescription}></textarea>           
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input type="text" className="form-control"  value={this.state.email} onChange={this.handleEmail} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Votre téléphone</label>
                <input type="text" className="form-control" value={this.state.phone} onChange={this.handleTelephone}/>
            </div>
            
            <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
          </div>
        )
    }
}

export default Doleonce;
