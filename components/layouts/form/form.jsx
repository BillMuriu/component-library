import { Button, Container, Stack, Typography } from "@mui/material";

import { RHFAutocomplete } from "@/components/ui/RHFAutocomplete/RHFAutocomplete";
import { RHFCheckbox } from "@/components/ui/RHFCheckbox/RHFCheckbox";
import { RHFDatePicker } from "@/components/ui/RHFDateTimePicker/RHFDatePicker";
import { RHFRadioGroup } from "@/components/ui/RHFRadioGroup/RHFRadioGroup";
import { RHFSlider } from "@/components/ui/RHFSlider/RHFSlider";
import { RHFSwitch } from "@/components/ui/RHFSwitch/RHFSwitch";
import { RHFTextField } from "@/components/ui/RHFTextField/RHFTextField";
import { RHFToggleButtonGroup } from "@/components/ui/RHFToggleButtonGroup/RHFToggleButtonGroup";

const dummyStates = [
  { id: "1", label: "California" },
  { id: "2", label: "New York" },
  { id: "3", label: "Texas" },
];

const dummyLanguages = [
  { id: "en", label: "English" },
  { id: "es", label: "Spanish" },
  { id: "fr", label: "French" },
];

const dummyGenders = [
  { id: "male", label: "Male" },
  { id: "female", label: "Female" },
  { id: "other", label: "Other" },
];

const dummySkills = [
  { id: "1", label: "JavaScript" },
  { id: "2", label: "Python" },
  { id: "3", label: "Java" },
];

export function Users() {
  return (
    <Container maxWidth="sm" component="form">
      <Stack sx={{ gap: 2 }}>
        <RHFTextField name="name" label="Name" />
        <RHFTextField name="email" label="Email" />
        <RHFAutocomplete name="states" label="States" options={dummyStates} />
        <RHFToggleButtonGroup name="languagesSpoken" options={dummyLanguages} />
        <RHFRadioGroup name="gender" options={dummyGenders} label="Gender" />
        <RHFCheckbox name="skills" options={dummySkills} label="Skills" />

        <RHFDatePicker
          name="registrationDateAndTime"
          label="Registration Date & Time"
        />
        <Typography>Former Employment Period:</Typography>
        <RHFSlider name="salaryRange" label="Salary Range" />
        <RHFSwitch name="isTeacher" label="Are you a teacher?" />

        <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button variant="contained" type="submit">
            New user
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
