import React from "react";
// import { ReactDOM } from "react";
import './crud.css'
import { student } from "../Lesson3/mock";


class Crud extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            base: student,
            name: '',
            status: '',
            search: 'name',
            active: null,
        }
    }
    render() {
        const onChange = (e) => {
            // console.log(e.target.name);
            this.setState({ [e.target.name]: e.target.value })
        }
        const Ondelete = (id) => {
            // console.log(id);
            let res = this.state.base.filter(vl => vl.id !== id);
            this.setState({ base: res })
        }
        const onFilter = (e) => {
            // console.log(e.target.value.toLowerCase())
            const { value } = e.target;
            let res = student.filter((item) => `${item[this.state.search]}`.toLowerCase().includes(value.toLowerCase()))
            this.setState({ base: res })
        }
        const onAdd = (user) => {
            user = {
                id: Date.now(),
                name: this.state.name,
                status: this.state.status.toLocaleUpperCase()
            }
            this.setState({ base: [...this.state.base, user], name: '', status: '' })
            // console.log(user);
        }
        const onSelect = (e) => {
            // console.log(e.target.value);
            this.setState({ search: e.target.value })
        }
        const onEdit=(id, name, status)=>{
            console.log(id, name, status);
            this.setState({
                active: {id, name, status}
            })
        }
        return (
            <div className="container">
                <div className="content">
                    <h1>Salom dunyo men Crudni yasashni o'rganamiz</h1>
                </div>
                <div className="content2">
                    <input value={this.state.name} onChange={onChange} type="text" name='name' placeholder="Name" />
                    <input value={this.state.status} onChange={onChange} type="text" name='status' placeholder="Status" />
                    <button onClick={onAdd}>Add</button>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <h3>Ismi: &nbsp; {this.state.name}</h3>
                        <h3>Status: &nbsp; {this.state.status}</h3>
                    </div>
                    <hr />
                    <select onChange={onSelect} name="" id="">
                        <option value="name">Name</option>
                        <option value="id">ID</option>
                        <option value="status">Status</option>
                    </select>
                    <input onChange={onFilter} type="text" placeholder="search" />
                </div>
                <div className="table">
                    <table border={'1'}>
                        <thead>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </thead>
                        <tbody>
                            {
                                this.state.base.length ?
                                    this.state.base.map(({ id, name, status }) => {
                                        return (
                                            <tr key={id}>
                                                <td>{id}</td>
                                                <td>{name}</td>
                                                <td>{status}</td>
                                                <td><button onClick={() => Ondelete(id)}>Delete</button></td>
                                                <td><button onClick={()=>onEdit({id,name,status})}>Edit</button></td>
                                            </tr>
                                        )
                                    }) : <tr>
                                        <th colSpan={5}><h1>No data</h1></th>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default Crud