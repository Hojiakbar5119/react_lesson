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
            status: ''
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
            let res = student.filter((value) => value.name.toLowerCase().includes(e.target.value.toLowerCase()))
            this.setState({ base: res })
        }
        const onAdd = (user) => {
            user = {
                id: Date.now(),
                name: this.state.name,
                status: this.state.status.toLocaleUpperCase()
            }
            this.setState({base:[...this.state.base,user], name: '', status: '' })
            console.log(user);
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
                    <hr />
                    <select name="" id="">
                        <option value="id">Id</option>
                        <option value="id">Name</option>
                        <option value="id">Status</option>
                    </select>
                    <input onChange={onFilter} type="text" name='filter' placeholder="filter" />
                    <h3>Ismi: &nbsp; {this.state.name}</h3>
                    <h3>Status: &nbsp; {this.state.status}</h3>
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
                                                <td><button>Edit</button></td>
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