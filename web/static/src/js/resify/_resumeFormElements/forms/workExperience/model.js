type WordExperienceForm = {
    id: String;
    isVolunteer: Boolean;
    company: String;
    position: String;
    website: String;
    startDate: String;
    endDate: String;
    isCurrent: Boolean;
    summary: String;
    order: Number;
};

export type State = WordExperienceForm[];