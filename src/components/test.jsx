import React, { useState } from "react";
import "./index.css";
import { Button, Form, Input, Modal, Radio } from "antd";
const App = () => {
    const [form] = Form.useForm();
    const [formValues, setFormValues] = useState();
    const [open, setOpen] = useState(false);
    const onCreate = (values) => {
        console.log("Received values of form: ", values);
        setFormValues(values);
        setOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>
                New Collection
            </Button>
            <pre>{JSON.stringify(formValues, null, 2)}</pre>
            <Modal
                open={open}
                title="Create a new collection"
                okText="Create"
                cancelText="Cancel"
                okButtonProps={{
                    autoFocus: true,
                    htmlType: "submit",
                }}
                onCancel={() => setOpen(false)}
                destroyOnClose
                modalRender={(dom) => (
                    <Form
                        layout="vertical"
                        form={form}
                        name="form_in_modal"
                        initialValues={{
                            modifier: "public",
                        }}
                        clearOnDestroy
                        onFinish={(values) => onCreate(values)}
                    >
                        {dom}
                    </Form>
                )}
            >
                <Form.Item
                    name="title"
                    label="Title"
                    rules={[
                        {
                            required: true,
                            message: "",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <Input type="textarea" />
                </Form.Item>
            </Modal>
        </>
    );
};
export default App;
