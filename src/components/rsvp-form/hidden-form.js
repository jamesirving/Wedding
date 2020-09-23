import React from 'react';

const HiddenForm = () => (
  <form data-netlify="true" name="rsvp" method="post" hidden>
    <input id="guests[0].givenName" name="guests[0].givenName" />

    <input id="guests[0].familyName" name="guests[0].familyName" />

    <input id="guests[0].email" name="guests[0].email" />

    <fieldset>
      <legend>RSVP</legend>
      <input name="guests[0].rsvp" type="radio" value="yes" />
      Yes, I will be attending
      <input name="guests[0].rsvp" type="radio" value="no" />
      No, unfortunately I am unable to attend
    </fieldset>

    <fieldset>
      <legend>Dietary Requirements</legend>
      <input name="guests[0].dietaryRequirements.vegan" type="checkbox" />
      <input name="guests[0].dietaryRequirements.vegetarian" type="checkbox" />
      <input name="guests[0].dietaryRequirements.nut" type="checkbox" />
      <input name="guests[0].dietaryRequirements.gluten" type="checkbox" />
      <input name="guests[0].dietaryRequirements.none" type="checkbox" />
    </fieldset>

    <input id="guests[1].givenName" name="guests[1].givenName" />

    <input id="guests[1].familyName" name="guests[1].familyName" />

    <input id="guests[1].email" name="guests[1].email" />

    <fieldset>
      <legend>RSVP</legend>
      <input name="guests[1].rsvp" type="radio" value="yes" />
      Yes, I will be attending
      <input name="guests[1].rsvp" type="radio" value="no" />
      No, unfortunately I am unable to attend
    </fieldset>

    <fieldset>
      <legend>Dietary Requirements</legend>
      <input name="guests[1].dietaryRequirements.vegan" type="checkbox" />
      <input name="guests[1].dietaryRequirements.vegetarian" type="checkbox" />
      <input name="guests[1].dietaryRequirements.nut" type="checkbox" />
      <input name="guests[1].dietaryRequirements.gluten" type="checkbox" />
      <input name="guests[1].dietaryRequirements.none" type="checkbox" />
    </fieldset>

    <input id="guests[2].givenName" name="guests[2].givenName" />

    <input id="guests[2].familyName" name="guests[2].familyName" />

    <input id="guests[2].email" name="guests[2].email" />

    <fieldset>
      <legend>RSVP</legend>
      <input name="guests[2].rsvp" type="radio" value="yes" />
      Yes, I will be attending
      <input name="guests[2].rsvp" type="radio" value="no" />
      No, unfortunately I am unable to attend
    </fieldset>

    <fieldset>
      <legend>Dietary Requirements</legend>
      <input name="guests[2].dietaryRequirements.vegan" type="checkbox" />
      <input name="guests[2].dietaryRequirements.vegetarian" type="checkbox" />
      <input name="guests[2].dietaryRequirements.nut" type="checkbox" />
      <input name="guests[2].dietaryRequirements.gluten" type="checkbox" />
      <input name="guests[2].dietaryRequirements.none" type="checkbox" />
    </fieldset>

    <input id="guests[3].givenName" name="guests[3].givenName" />

    <input id="guests[3].familyName" name="guests[3].familyName" />

    <input id="guests[3].email" name="guests[3].email" />

    <fieldset>
      <legend>RSVP</legend>
      <input name="guests[3].rsvp" type="radio" value="yes" />
      Yes, I will be attending
      <input name="guests[3].rsvp" type="radio" value="no" />
      No, unfortunately I am unable to attend
    </fieldset>

    <fieldset>
      <legend>Dietary Requirements</legend>
      <input name="guests[3].dietaryRequirements.vegan" type="checkbox" />
      <input name="guests[3].dietaryRequirements.vegetarian" type="checkbox" />
      <input name="guests[3].dietaryRequirements.nut" type="checkbox" />
      <input name="guests[3].dietaryRequirements.gluten" type="checkbox" />
      <input name="guests[3].dietaryRequirements.none" type="checkbox" />
    </fieldset>

    <input id="guests[4].givenName" name="guests[4].givenName" />

    <input id="guests[4].familyName" name="guests[4].familyName" />

    <input id="guests[4].email" name="guests[4].email" />

    <fieldset>
      <legend>RSVP</legend>
      <input name="guests[4].rsvp" type="radio" value="yes" />
      Yes, I will be attending
      <input name="guests[4].rsvp" type="radio" value="no" />
      No, unfortunately I am unable to attend
    </fieldset>

    <fieldset>
      <legend>Dietary Requirements</legend>
      <input name="guests[4].dietaryRequirements.vegan" type="checkbox" />
      <input name="guests[4].dietaryRequirements.vegetarian" type="checkbox" />
      <input name="guests[4].dietaryRequirements.nut" type="checkbox" />
      <input name="guests[4].dietaryRequirements.gluten" type="checkbox" />
      <input name="guests[4].dietaryRequirements.none" type="checkbox" />
    </fieldset>

    <input id="guests[4].givenName" name="guests[4].givenName" />

    <input id="guests[4].familyName" name="guests[4].familyName" />

    <input id="guests[4].email" name="guests[4].email" />

    <fieldset>
      <legend>RSVP</legend>
      <input name="guests[4].rsvp" type="radio" value="yes" />
      Yes, I will be attending
      <input name="guests[4].rsvp" type="radio" value="no" />
      No, unfortunately I am unable to attend
    </fieldset>

    <fieldset>
      <legend>Dietary Requirements</legend>
      <input name="guests[4].dietaryRequirements.vegan" type="checkbox" />
      <input name="guests[4].dietaryRequirements.vegetarian" type="checkbox" />
      <input name="guests[4].dietaryRequirements.nut" type="checkbox" />
      <input name="guests[4].dietaryRequirements.gluten" type="checkbox" />
      <input name="guests[4].dietaryRequirements.none" type="checkbox" />
    </fieldset>
  </form>
);

export { HiddenForm };
