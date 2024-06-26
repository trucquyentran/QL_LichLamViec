import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Divider, Table, Button, Form, Input, Space, DatePicker, Select } from 'antd';
import moment from 'moment'; //thư viện định dạng ngày tháng
// import { isValid } from 'date-fns';

const { Option } = Select;

function ListUser ()
{
    const [ form ] = Form.useForm();
    const [ users, setUsers ] = useState( [] );
    const [ selectionType, setSelectionType ] = useState( 'checkbox' );

    useEffect( () =>
    {
        loadUsers();
    }, [] );

    const loadUsers = async () =>
    {
        try
        {
            const response = await axios.get( "http://localhost:8090/api/v1/user/getall" );
            setUsers( response.data );
        } catch ( error )
        {
            console.error( "Error loading users:", error );
        }
    };

    const onFinish = async ( values ) =>
    {
        try
        {
            // Chuyển đổi ngày tháng sang định dạng YYYY-MM-DD trước khi gửi lên server
            // const formattedValues = {
            //     ...values,
            //     ngaysinh: moment(values.ngaysinh).format('YYYY-MM-DD'),
            // };
            // await axios.post("http://localhost:8090/api/v1/user/save", formattedValues);
            await axios.post( "http://localhost:8090/api/v1/user/save", values );
            alert( "User registered successfully!" );
            form.resetFields();
            loadUsers();
        } catch ( error )
        {
            console.error( "Error registering user:", error );
            alert( "User registration failed." );
        }
    };

    const update = async () =>
    {
        try
        {
            const userId = form.getFieldValue( '_id' );
            await axios.put( `http://localhost:8090/api/v1/user/edit/${ userId }`, form.getFieldsValue() );
            // const values = await form.validateFields();
            // // Chuyển đổi ngày tháng sang định dạng YYYY-MM-DD trước khi gửi lên server
            // const formattedValues = {
            //     ...values,
            //     ngaysinh: moment(values.ngaysinh).format('YYYY-MM-DD'),
            // };
            // await axios.put(`http://localhost:8090/api/v1/user/edit/${values._id}`, formattedValues);
            alert( "User updated successfully!" );
            form.resetFields();
            loadUsers();
        } catch ( error )
        {
            console.error( "Error updating user:", error );
            alert( "User update failed." );
        }
    };

    const editUser = ( record ) =>
    {
        form.setFieldsValue( record );
    };

    const deleteUser = async ( _id ) =>
    {
        try
        {
            await axios.delete( `http://localhost:8090/api/v1/user/delete/${ _id }` );
            alert( "User deleted successfully!" );
            loadUsers();
        } catch ( error )
        {
            console.error( "Error deleting user:", error );
            alert( "User deletion failed." );
        }
    };

    const formatDate = ( dateString ) =>
    {
        return moment( dateString ).format( 'DD-MM-YYYY' );
    };


    const columns = [
        { title: '#', dataIndex: '_id' },
        { title: 'Họ tên', dataIndex: 'hoten', render: ( text, record ) => <a onClick={ () => editUser( record ) }>{ text }</a> },
        { title: 'Giới tính', dataIndex: 'gioitinh' },
        { title: 'Ngày sinh', dataIndex: 'ngaysinh', render: ( text ) => formatDate( text ) },
        { title: 'Đi động', dataIndex: 'sdt' },
        { title: 'Email', dataIndex: 'email' },
        { title: 'Địa chỉ', dataIndex: 'diachi' },
        {
            title: 'Action', dataIndex: '_id', render: ( text, record ) => (
                <Space>
                    <Button type="primary" onClick={ () => editUser( record ) }>Edit</Button>
                    <Button type="primary" danger onClick={ () => deleteUser( record._id ) }>Delete</Button>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Form
                form={ form }
                onFinish={ onFinish }
                style={ { maxWidth: 600 } }
            >
                <Form.Item name="hoten" label="Họ tên" rules={ [ { required: true, message: 'Vui lòng nhập họ tên!' } ] }>
                    <Input placeholder="Nhập vào Họ tên" />
                </Form.Item>
                <Form.Item name="gioitinh" label="Giới tính" rules={ [ { required: true, message: 'Vui lòng chọn giới tính!' } ] }>
                    <Select placeholder="Chọn giới tính" style={ { width: '100%' } }>
                        <Option value="nam">Nam</Option>
                        <Option value="nu">Nữ</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="ngaysinh" label="Ngày sinh" rules={ [ { required: true, message: 'Vui lòng chọn ngày sinh!' } ] }>
                    {/* <Input/> */}
                    <DatePicker  placeholder="Chọn ngày sinh" style={ { width: '100%' } } format="DD-MM-YYYY" />
                </Form.Item>
                <Form.Item name="diachi" label="Địa chỉ" rules={ [ { required: true, message: 'Vui lòng nhập địa chỉ!' } ] }>
                    <Input placeholder="Nhập vào địa chỉ" />
                </Form.Item>
                <Form.Item name="sdt" label="SĐT" rules={ [ { required: true, message: 'Vui lòng nhập SĐT!' } ] }>
                    <Input type='number' placeholder="Nhập vào số điện thoại" />
                </Form.Item>
                <Form.Item name="email" label="Email" rules={ [ { required: true, message: 'Vui lòng nhập email!' } ] }>
                    <Input type='email' placeholder="Nhập vào địa chỉ email" />
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button type="primary" htmlType="submit">Register</Button>
                        <Button type="primary" htmlType="button" onClick={ update }>Update</Button>
                        <Button htmlType="button" onClick={ () => form.resetFields() }>Reset</Button>
                    </Space>
                </Form.Item>
            </Form>
            <Divider />
            <Table
                rowSelection={ {
                    type: selectionType,
                    onChange: ( selectedRowKeys, selectedRows ) =>
                    {
                        console.log( `selectedRowKeys: ${ selectedRowKeys }`, 'selectedRows: ', selectedRows );
                    },
                } }
                columns={ columns }
                dataSource={ users.map( user => ( { ...user, key: user._id } ) ) }
            />
        </div>
    );
}

export default ListUser;
