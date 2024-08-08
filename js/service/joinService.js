const volunteers = [];

async function getVolunteer(index) {
    return volunteers[index]
  };
  
  async function getVolunteers() {
    return volunteers;
  }

export default {getVolunteer, getVolunteers}