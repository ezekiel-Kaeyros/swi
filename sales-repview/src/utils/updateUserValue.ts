import {
  activateStep,
  makeStepDone,
  toggleShowForm,
} from '@/redux/features/agent-creation';
import { OptionType, OptionTypes } from './selectType';

// THIS PREFILL RELATED SELECT FIELDS
export const fillSelect = (
  e: any,
  selectToFill: any,
  arrayUsedToFill: any,
  setValue: any
) => {
  const searchElement: OptionType | undefined = arrayUsedToFill?.find(
    (province: any) => province?.id === parseInt(e.target.value)
  );
  setValue(selectToFill, searchElement?.id as string);
};

// NAVIGATION ENGINE FOR USER CREATION FORM STEPS
export const navigateSteps = (
  dispatch: any,
  activateB: boolean,
  activateID: any,
  makeStepDoneB: boolean,
  makeStepDoneID: any,
  toggleShowFormID: any
) => {
  // turning first step to inactive
  dispatch(
    activateStep({
      tabData: activateB,
      id: activateID?.id,
    })
  );
  // turning first step to undone
  dispatch(
    makeStepDone({
      tabData: makeStepDoneB,
      id: makeStepDoneID?.id,
    })
  );
  // showing first step form and hidding all other forms
  dispatch(
    toggleShowForm({
      id: toggleShowFormID?.id,
    })
  );
};

export const findElementInSelectList = (array: OptionTypes, id: any) => {
  const element = array.find((item: any) => {
    return parseInt(item?.id) === parseInt(id);
  });

  return element;
};
