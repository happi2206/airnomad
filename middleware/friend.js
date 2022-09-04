export default function ({ store, redirect }) {
  if (!localStorage.isFriend && !store.getters["getState"])
    return redirect("/");
}
