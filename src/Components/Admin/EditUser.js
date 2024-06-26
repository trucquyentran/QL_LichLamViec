import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select, Space } from 'antd';

function EditUs ()
{
    const [ form ] = Form.useForm();
    // const [ _id, setId ] = useState( '' );
    // const [ hoten, setHoTen ] = useState( "" );
    // const [ ngaysinh, setNgaySinh ] = useState( [] );
    // const [ gioitinh, setGioiTinh ] = useState( "" );
    // const [ sdt, setSdt ] = useState( "" );
    // const [ email, setEmail ] = useState( [] );
    // const [ diachi, setDiaChi ] = useState( [] );
    // const [ users, setUsers ] = useState( [] );


   
    // const data = users.map( ( user ) => ( {
    //     _id: user._id, 
    //     hoten: user.hoten,
    //     gioitinh: user.gioitinh,
    //     ngaysinh: user.ngaysinh, 
    //     sdt: user.sdt, 
    //     email: user.email, 
    //     diachi: user.diachi, 

    // } ) );

    // useEffect( () =>
    //     {
    //         ( async () => await Load() )();
    //     }, [] );
    
    
    //     async function Load ()
    //     {
    //         const result = await axios.get(
    //             "http://localhost:8090/api/v1/user/getall" );
    //         setUsers( result.data );
    //         console.log( result.data );
    //     }

   
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    const onFinish = ( values ) =>
    {
        console.log( values );
    };
    const onReset = () =>
    {
        form.resetFields();
    };
 
    return (
        <Form
            { ...layout }
            form={ form }
            name="control-hooks"
            onFinish={ onFinish }
            style={ {
                maxWidth: 600,
            } }
        >
            <Form.Item
                name="hoten"
                label="Họ tên"
                rules={ [
                    {
                        required: true,
                    },
                ] }
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="diachi"
                label="Địa chỉ"
                rules={ [
                    {
                        required: true,
                    },
                ] }
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="sđt"
                label="SĐT"
                rules={ [
                    {
                        required: true,
                    },
                ] }
            >
                <Input />
            </Form.Item>
            
           
            <Form.Item { ...tailLayout }>
                <Space>
                    <Button type="primary" htmlType="submit">
                        Submit 
                    </Button>
                    <Button htmlType="button" onClick={ onReset }>
                        Reset
                    </Button>
                   
                </Space>
            </Form.Item>
        </Form>
    );
};
export default EditUs;