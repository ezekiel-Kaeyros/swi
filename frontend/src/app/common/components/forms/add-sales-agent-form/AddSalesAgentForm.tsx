import React from 'react';
import { AddSalesAgentProps } from './addSalesAgent';
import FormRow from './form-row/FormRow';
import InputField from '../text-field/InputField';
import { Button } from '../../button/Button';
import AddUserIcon from '../../../../../../public/icons//addUserIcon.svg';

const AddSalesAgentForm: React.FC<AddSalesAgentProps> = () => {
  return (
    <form>
      <div className="">
        <h1 className="font-bold my-4">Personal Information</h1>
        <FormRow
          content1={<InputField name="fullName" placeholder="Full Name" />}
          content2={
            <InputField name="dateOfBirth" placeholder="Date of Birth" />
          }
        />
        <FormRow
          content1={<InputField name="gender" placeholder="gender" />}
          content2={<InputField name="contact" placeholder="Contact Details" />}
        />
        <FormRow content1={<InputField name="email" placeholder="E-mail" />} />

        <h1 className="font-bold my-4">Address Information</h1>
        <FormRow
          content1={
            <InputField name="streetAddress" placeholder="Street Address" />
          }
          content2={<InputField name="city" placeholder="City" />}
        />

        <FormRow
          content1={<InputField name="state" placeholder="State/Province" />}
          content2={<InputField name="zipCode" placeholder="ZIP Code" />}
        />

        <FormRow
          content1={<InputField name="country" placeholder="Country" />}
        />

        <h1 className="font-bold my-4">Employment Information</h1>
        <FormRow
          content1={<InputField name="jobTitle" placeholder="Job Title" />}
          content2={
            <InputField name="department" placeholder="Department/Team" />
          }
        />

        <FormRow
          content1={
            <InputField
              name="reportingManager"
              placeholder="Reporting Manager"
            />
          }
          content2={<InputField name="startDate" placeholder="Start Date" />}
        />
      </div>

      {/* Submit button */}
      <div className="w-full my-8">
        <Button icon={AddUserIcon}>Add Sales Agent</Button>
      </div>
    </form>
  );
};

export default AddSalesAgentForm;
