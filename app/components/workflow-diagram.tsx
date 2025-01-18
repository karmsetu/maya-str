'use client'

import Mermaid from './mermaid'

const encryptionPhase = `
graph TD
    A["Website - Sign Up"] --> B["Unique ID Generated"]
    B --> C["Key For Receiver And Client Generated"]
    C --> D["Encryptor Exe Downloaded For particular ID"]
    D --> E["User Move the Encryptor in the Confidential Folder"]
    E --> F["User Executed the Encryptor"]
    F --> G["All the files start getting encrypted"]
    G --> H["HEX code of Each file getting encrypted from the Encryption Server"]
    H --> I["Client catches the encrypted code"]
    I --> J["Overwrite the HEX code"]
    J --> K["Confidential Data cannot be read"]
`

const encryptionProcess = `
graph TD
    L["Data Received"] --> M["For Each User 2 keys are allocated"]
    M --> N["Unique Cipher Key from 2keys Generated"]
    N --> O["With more than 10 combinations data gets Encrypted"]
    O --> P["Creates a 70+ character Encrypted Data"]
`

const decryptionPhase = `
graph TD
    Q["Website - Login"] --> R["Decrypter Exe Downloaded For particular User"]
    R --> S["User Move the Decrypter in the Secured Folder"]
    S --> T["User Executed the Decrypter"]
    T --> U["All the files start getting Decrypted"]
    U --> V["Encrypted Key of Each file getting Decrypted from the Encryption Server"]
    V --> W["Client catches the Decrypted HEX code"]
    W --> X["Overwrite the HEX code"]
    X --> Y["Encrypted Files Gets Decrypted in the original extension and original data"]
`

const decryptionProcess = `
graph TD
    Z["Cipher Text Received"] --> AA["Key Fetched from the Cipher"]
    AA --> AB["2 keys for the User fetched"]
    AB --> AC["With more than 10 combinations data gets Decrypted"]
    AC --> AD["Returns the Original data"]
`

export default function WorkflowDiagram() {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Encryption Phase</h3>
        <div className="overflow-x-auto bg-white p-4 rounded-lg shadow">
          <Mermaid chart={encryptionPhase} />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Encryption Process</h3>
        <div className="overflow-x-auto bg-white p-4 rounded-lg shadow">
          <Mermaid chart={encryptionProcess} />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Decryption Phase</h3>
        <div className="overflow-x-auto bg-white p-4 rounded-lg shadow">
          <Mermaid chart={decryptionPhase} />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Decryption Process</h3>
        <div className="overflow-x-auto bg-white p-4 rounded-lg shadow">
          <Mermaid chart={decryptionProcess} />
        </div>
      </div>
    </div>
  )
}

