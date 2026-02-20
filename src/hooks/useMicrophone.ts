import { useRef, useState } from "react"

type MicStatus = "idle" | "requesting" | "granted" | "denied" | "error";

export const useMicrophone = () => {

    const streamRef = useRef<MediaStream | null>(null);
    const [status, setStatus] = useState<MicStatus>("idle");


    const requestMicrophonePermission = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            stream.active ? setStatus("granted") : setStatus("denied");
            streamRef.current = stream;
            console.log("Microphone permission granted");
            return stream;
        }
        catch (err) {
            console.error("Error accessing microphone:", err);
            setStatus("error");
            return null
        }
    }

    return { requestMicrophonePermission, status }

}