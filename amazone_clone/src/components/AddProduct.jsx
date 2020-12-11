import React from "react"
import { Button, Modal ,Form} from "react-bootstrap";

class AddProduct extends React.Component {

    state={
       
        loading:false,

        product:{
            name:"",
            description:"",
            brand:"",
            price:"",
            category:"book"
        },
        formData: null,
        show:true,

    }
    updateField = (e) => {
		let product = { ...this.state.product }
		let currentid = e.currentTarget.id

	
			product[currentid] = e.currentTarget.value 
	

		this.setState({ product: product })
	}



    
   

    handleDelete = async () => {
		
		try {
			const url = `http://localhost:4001/products/${this.props._id}`
			let response = await fetch(url , {
				method: "DELETE",
				headers: {

				

				},
			})
			if (response.ok) {
				alert("product deleted succesfully")
				this.handleClose()
			} else {
				alert("Something went wrong!")
			}
		} catch (e) {
			console.log(e)
		}
	}




    EditFetch = async () => {
		
		

		try {
			
			
				let response = await fetch(
					`http://localhost:4001/products`,
					{
						method: "POST",
						body: JSON.stringify(this.state.product),
						headers: new Headers({
							"Content-Type": "application/json",

							

						}),
					}
				)
			

			if (response.ok) {
				let res= await response.json()
				console.log("res of post",res)
				alert("product saved!")
				this.setState({
					product: {
                        name:"",
                        description:"",
                        brand:"",
                        price:"",
                        category:"",
					},
					errMessage: "",
					loading: false,
				})
				
				return res
			} else {
				console.log("an error occurred")
				let error = await response.json()
				this.setState({
					errMessage: error.message,
					
				})
			}
		} catch (e) {
			console.log(e) // Error
			this.setState({
				errMessage: e.message,
				loading: false,
			})
		}
    }
    handleImageUpload = (event) => {
		console.log("target", event.target)
		const formData = new FormData()
		formData.append("product", event.target.files[0])
		this.setState({ formData })
	}

	UploadImageFetch = (id) => {
		

		fetch(
			`http://localhost:4001/products/` +
			id+
				"/upload",
			{
				method: "POST",
				body: this.state.formData,
				headers: new Headers({
				
				}),
			}
		)
			.then((response) => response.json())
	


			.catch((error) => {
				console.error(error)
			})
			this.handleClose()
			
	}


    submitForm = (e) => {
		e.preventDefault()
		this.setState({ loading: true })
		this.EditFetch()
    }
    postProduct=async()=>{ let ProductId = await this.EditFetch();this.UploadImageFetch(ProductId._id)}

    handleShow = () => this.setState({ show: true})
    handleClose = () => this.setState({ show:false }) 

    render(){
        return(
            <>
            <Button variant="warning"  className="mx-5" onClick={()=>this.setState({show:true})}  >Add a New Product</Button>
            {this.state.show && (
            <Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>
							
								<p>Add New Product</p>
						
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form onSubmit={this.submitForm}>
							<Form.Group>
								<Form.Label>Name*</Form.Label>

								<Form.Control
									id="name"
									type="text"
									value={this.state.product.name}
									onChange={this.updateField}
									placeholder="Ex: Retail Sales Manager"
									required
								/>
							</Form.Group>
                            <Form.Group>
								<Form.Label htmlFor="description">Description</Form.Label>
								<Form.Control
									as="textarea"
									name="description"
									id="description"
									placeholder="description"
									value={this.state.product.description}
									onChange={this.updateField}
									required
								/>
							</Form.Group>
                            <Form.Group>
								<Form.Label>Brand*</Form.Label>

								<Form.Control
									id="brand"
									type="text"
									value={this.state.product.brand}
									onChange={this.updateField}
									placeholder="Ex: Retail Sales Manager"
									required
								/>
							</Form.Group>

                            <Form.Group>
								<Form.Label>Price*</Form.Label>

								<Form.Control
									id="price"
									type="number"
									value={this.state.product.price} 
									onChange={this.updateField}
									placeholder="Ex: 567"
									required
								/>
                                <p>$</p>
							</Form.Group>
                            

                            <Form.Group>
								<Form.Label htmlFor="category">
									Category
								</Form.Label>
								<Form.Control
									as="select"
									name="category"
									id="category"
									value={this.state.product.category}
									onChange={this.updateField}
								>
									<option>Books</option>
									<option>Electronics</option>
									<option>Home</option>
									<option>Clothes</option>
									
								</Form.Control>
							</Form.Group>
                            <Form.Group className="d-flex px-3">
								
									<Button
										className=" deleteBtn"
										variant="primary"
										onClick={this.handleDelete}
									>
										Delete
									</Button>
								
								<Button
									className="saveBtn ml-auto"
									variant="primary"
									type="submit"
								>
									{" "}
									Save
								</Button>
							</Form.Group>
                            

							

						
						</Form>
					</Modal.Body>
                </Modal>
                )}
        
            </>



        )
    }
}
export default AddProduct