"use client"


import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Row, Col, Input } from 'antd';
import Authservice from '../services/authServices'



const App = (props) => {


  const { name, openModal, onClose, myProfileData, setMyProfileData, setIsModalVisible,setUpdateMyProfileData,updateMyprofileData } = props;
  const [isModalOpen, setIsModalOpen] = useState(openModal);
  const [form] = Form.useForm();

 
  useEffect(() => {
    if (!updateMyprofileData) return;
    setMyProfileData(updateMyprofileData);
    Authservice.updateUserProfile(updateMyprofileData).then((response) => {
      console.log(response);
    });

  }, [updateMyprofileData]);


  useEffect(() => {
    setIsModalOpen(openModal);
  }, [openModal]);

  const onFinish = (values) => {


    if (typeof values.skills == "string") {
      const skills = values.skills.split(',');
      setUpdateMyProfileData({ ...myProfileData, skills: skills });

    }


    else if (values.higherEducationInstitute || values.fromYearToYear || values.course || values.aboutEducation) {
      // TO REMOVE UNDEINED KEY VALUE PAIRS
      const cleanedObj = Object.fromEntries(
        Object.entries(values).filter(([key, value]) => value !== undefined)
      );

      let higherEducation = { ...myProfileData?.higherEducation, ...cleanedObj };
      setUpdateMyProfileData({ ...myProfileData, higherEducation })
    }


    else if (values.certificationName || values.certificationInstitute) {
      // TO REMOVE UNDEINED KEY VALUE PAIRS
      const cleanedObj = Object.fromEntries(
        Object.entries(values).filter(([key, value]) => value !== undefined)
      );

      let certification = { ...myProfileData?.certification, ...cleanedObj };
      setUpdateMyProfileData({ ...myProfileData, certification })
    }


    else if (values.experiences) {
      setUpdateMyProfileData({ ...myProfileData, experiences: values.experiences });
    }



    else {
      console.log(values);
      setIsModalOpen(false)
      // setOtherPatientDetails(values)
      console.log({ ...myProfileData, ...values });
      setUpdateMyProfileData({ ...myProfileData, ...values });
    }

    setIsModalVisible(false)

  }


  const showModal = () => {
    form.resetFields();
    setIsModalOpen(openModal);
  };
  const handleOk = () => {
    form.submit();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    if (onClose) onClose();
  };



  return (
    <>

      <Modal title="Edit Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          form={form}
          initialValues={myProfileData}
          autoComplete="off"
          // labelCol={{ span: 6 }}
          // wrapperCol={{ span: 16 }}
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}>



          {
            name === "skills" &&

            <Form.Item
              // label='Name'
              name={name}
            // rules={[
            //   {
            //     max: 50,
            //     message: 'Max 40 Character'
            //   }
            // ]}
            >
              <Input placeholder={name} name={name} defaultValue={name.toString()} />
            </Form.Item>

          }



          {
            name === "higherEducation" &&
            <>
              <Form.Item
                label='Higher Education Institute'
                name='higherEducationInstitute'
                rules={[
                  {
                    max: 100,
                    message: 'Max 100 characters'
                  }
                ]}
              >
                <Input placeholder='Institute' name='higherEducationInstitute' defaultValue={myProfileData?.higherEducation?.higherEducationInstitute} />
              </Form.Item>

              <Form.Item
                label='From Year To Year'
                name='fromYearToYear'
                rules={[
                  {
                    max: 100,
                    message: 'Max 100 characters'
                  }
                ]}
              >
                <Input placeholder='From Year To Year' name='fromYearToYear' defaultValue={myProfileData?.higherEducation?.fromYearToYear} />
              </Form.Item>

              <Form.Item
                label='Course'
                name='course'
              >
                <Input placeholder='Course' name='course' defaultValue={myProfileData?.higherEducation?.course} />
              </Form.Item>

              <Form.Item
                label='About Education'
                name='aboutEducation'
              >
                <Input.TextArea placeholder='About Education' name='aboutEducation' defaultValue={myProfileData?.higherEducation?.aboutEducation} />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
              </Form.Item>
            </>
          }

          {
            name === "certification" &&
            <>
              <Form.Item
                label='Certification Name'
                name='certificationName'
                rules={[
                  {
                    max: 100,
                    message: 'Max 100 characters'
                  }
                ]}
              >
                <Input placeholder='Certification Name' name='certificationName' defaultValue={myProfileData?.certification?.certificationName} />
              </Form.Item>

              <Form.Item
                label='Certification Institute'
                name='certificationInstitute'
                rules={[
                  {
                    max: 100,
                    message: 'Max 100 characters'
                  }
                ]}
              >
                <Input placeholder='Certification Institute' name='certificationInstitute' defaultValue={myProfileData?.certification?.certificationInstitute} />
              </Form.Item>
            </>
          }

          {
            name === "experiences" &&

            myProfileData?.experiences?.map((experience, index) => (
              <React.Fragment key={index}>
                <Form.Item
                  label={`From Year To Year ${index + 1}`}
                  name={['experiences', index, 'fromYearToYear']}
                >
                  <Input placeholder={`From Year To Year ${index + 1}`} />
                </Form.Item>

                <Form.Item
                  label={`Organization With Role ${index + 1}`}
                  name={['experiences', index, 'organizationWithRole']}
                >
                  <Input placeholder={`Organization With Role ${index + 1}`} />
                </Form.Item>
              </React.Fragment>
            ))

          }


          {

            name !== "skills" && name !== "higherEducation" && name !== "certification" && name !== "experiences" &&
            <Form.Item
              // label='Name'
              name={name}
            // rules={[
            //   {
            //     max: 50,
            //     message: 'Max 40 Character'
            //   }
            // ]}
            >
              <Input placeholder={name} name={name} />
            </Form.Item>


          }




          {/* <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
              </Form.Item> */}
        </Form>

      </Modal>
    </>
  );
};

export default App;