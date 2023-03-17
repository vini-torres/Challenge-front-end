export default function select(...classes) {
    return classes.filter(Boolean).join(" ");
}