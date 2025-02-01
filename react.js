import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const FAQEditor = ({ value, onChange }) => (
    <CKEditor editor={ClassicEditor} data={value} onChange={(event, editor) => onChange(editor.getData())} />
);
