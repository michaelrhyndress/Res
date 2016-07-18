type WordExperienceForm = {
    isVolunteer: Boolean;
    company: String;
    position: String;
    website: String;
    startDate: String;
    endDate: String;
    isCurrent: Boolean;
    summary: String;
};

export type State = WordExperienceForm[];