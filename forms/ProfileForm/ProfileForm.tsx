import type { FC } from "react";
import type { ProfileFormValues } from "@/models/ProfileModel";

interface Props {
  values: ProfileFormValues;
}

const ProfileForm: FC<Props> = (props) => {
  const { values } = props;
  return <pre>{JSON.stringify(values, null, 2)}</pre>;
};

export default ProfileForm;
