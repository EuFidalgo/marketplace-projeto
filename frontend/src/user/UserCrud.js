import React, { Component } from 'react';
import Main from '../components/main';
import axios from 'axios';
import { Button } from '@material-ui/core';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir',
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []

}

export default class UserCrud extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if (add) list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm() {
        return (
            < div className='form' >
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <label>Nome</label>
                            <input type='text' className='form-control'
                                name='name'
                                valeu={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeHolder='Digite o nome...' />
                        </div>
                    </div>

                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <label>E-mail</label>
                            <input type='text' className='form-control'
                                name='email'
                                valeu={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeHolder='Digite o e-mail...' />
                        </div>
                    </div>

                    <hr />
                    <div className='column'>
                        <div className='col-12 d-flex justify-content-end'>
                            <Button className='btn btn-primary'
                                onClick={e => this.save(e)} variant='contained' color='primary'>
                                Salvar
                            </Button>
                            <Button className='btn btn-secondary ml-1'
                                onClick={e => this.clear(e)} variant='contained' >
                                Cancelar
                            </Button>

                        </div>

                    </div>
                </div>
            </div >
        )
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return(
            <table className='table mt-4'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className='btn btn-warning' onClick={() => this.load(user)}>
                            <i className='fa fa-pencil'></i>
                        </button>
                    <button className='btn btn-danger ml-2' onClick={() => this.remove(user)}>
                        <i className='fa fa-trash'></i>
                    </button>
                    </td>
                </tr >
            )
    })
}

render() {



    return (
        <Main {...headerProps}>
            {this.renderForm()}
            {this.renderTable()}
        </Main> 
    )
}

}