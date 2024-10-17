import React from 'react';
     
class NoteForm extends React.Component {
    constructor(props) {
        super(props);
      
        // inisialisasi state
        this.state = {
          title: '',
          body: '',
          charLimit: 50, // Batasi judul maksimal 50 karakter
        }
      
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
      }
      
      onTitleChangeEventHandler(event) {
        const { value } = event.target;
        // Hanya perbarui state jika panjang judul tidak melebihi batas
        if (value.length <= this.state.charLimit) {
          this.setState({
            title: value,
          });
        }
      }
      
      onBodyChangeEventHandler(event) {
        this.setState(() => {
          return {
            body: event.target.value,
          }
        });
      }
      
      onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
      }
 render() {
  const remainingChars = this.state.charLimit - this.state.title.length; // Hitung sisa karakter

   return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <form  onSubmit={this.onSubmitEventHandler}>
      <p className="note-input__title__char-limit">Sisa karakter: {remainingChars}</p>
        <input className="note-input__title"  type="text" placeholder="Ini adalah judul..." required value={this.state.title} onChange={this.onTitleChangeEventHandler} />
        <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu disini...." required value={this.state.body} onChange={this.onBodyChangeEventHandler} />
        <button type="submit">Buat</button>
      </form>
     </div>
   )
 }
}
 
export default NoteForm;