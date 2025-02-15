import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import CompanyInfo from "./CompanyInfo";
import PersonalInfo from "./PersonalInfo";
import Passwords from "./Passwords";
import SaveButton from "./SaveButton";

import { useLabels, UsersService } from "src/services/client";
import { NotificationsService } from "src/services";
import { QUERIES_KEYS } from "src/enums";

import type { OnInfoChange, RightDiv } from "../types";
import type { UpdateUser } from "src/services/api/request-types";

const StyledContainer = "flex flex-col gap-5";
const StyledDescription = "mb-2 text-gray-700 font-medium";
const StyledRuler = "h-0.5 bg-gray-200 mb-3 mt-6";

const RightDiv = ({ stopEdit, editing, user }: RightDiv) => {
  const getLabel = useLabels();
  const queryClient = useQueryClient();
  const [body, setBody] = useState<UpdateUser["body"]>({
    username: user.username,
  });

  const { mutate, isPending } = UsersService.useUpdate({
    onSuccess: (user) => {
      stopEdit();
      setBody({ username: user.username });
      queryClient.setQueryData([QUERIES_KEYS.user], user);
      NotificationsService.info(getLabel("user-profile.edit-success"));
    },
  });

  const save = () => {
    if (body.password !== body.passwordConfirmation) {
      return NotificationsService.error(getLabel("commons.password-mismatch"));
    }
    mutate({ id: user.id, body });
  };

  const onChange = ({ field, value }: OnInfoChange) => {
    setBody((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className={StyledContainer}>
      <p className={StyledDescription}>
        {getLabel("user-profile.inputs-description")}
      </p>
      <CompanyInfo
        editing={editing}
        user={user}
        body={body}
        onChange={onChange}
      />
      <hr className={StyledRuler} />
      <PersonalInfo
        editing={editing}
        user={user}
        body={body}
        onChange={onChange}
      />
      <Passwords editing={editing} body={body} onChange={onChange} />
      {editing && (
        <SaveButton
          onClick={save}
          loading={isPending}
          disabled={!Object.keys(body).length}
        />
      )}
    </div>
  );
};

export default RightDiv;
