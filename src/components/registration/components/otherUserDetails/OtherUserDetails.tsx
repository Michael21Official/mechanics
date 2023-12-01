import React, { ChangeEvent } from 'react';

interface OtherUserDetailsProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const OtherUserDetails: React.FC<OtherUserDetailsProps> = ({ value, onChange }) => {
  return (
    <div className="container-textarea-other-user-details">
      <label>Other User Details:</label>
      <textarea
        name="other_user_details"
        className="input textarea-other-user-details"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default OtherUserDetails;
